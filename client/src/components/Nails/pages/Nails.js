import React, { useEffect, useState, useCallback } from 'react';
import NailImages from './NailImages';
import UploadModal from './../modals/UploadModal';
import { connect } from 'react-redux';
import { storage } from '../../../firebase/firebase';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import NailUploadNav from './../modals/NailUploadNav';
import NailSkeleton from './../skeletons/NailSkeleton';
import FooterNav from '../../Mobile/FooterNav';
import ToggleTheme from '../../Main/ToggleTheme';

const Nails = ({ logIn, darkMode, setDarkMode }) => {
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [onNailComp, setOnNailComp] = useState(false);

  const allImageRef = ref(storage, 'nails/');

  const displayedImages = useCallback((el) => {
    if (el !== null) {
      setVisible(true);
    }
  }, []);

  const handleImage = () => {
    if (image === null) return;
    const imageRef = ref(storage, `nails/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl((prev) => [...prev, url]);
      });
    });
  };

  const handleDeleteImage = (url) => {
    const imageName = ref(storage, url);
    const imageRef = ref(storage, `nails/${imageName.name}`);
    deleteObject(imageRef).then(() => {
      setImageUrl(imageUrl.filter((img) => img !== url));
    });
  };

  useEffect(() => {
    listAll(allImageRef).then((res) => {
      res.items.map((item) =>
        getDownloadURL(item).then((url) => {
          url = url.replace(
            'https://firebasestorage.googleapis.com/v0/b/lovebylaysha-be39b.appspot.com',
            `${process.env.REACT_APP_IMAGEKIT}/tr:w-250,h-250,dpr-2`
          );
          setImageUrl((prev) => [...prev, url]);
          setTimeout(() => {
            setLoading(false);
          }, 700);
        })
      );
    });
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setOnNailComp(true);
  }, [logIn]);

  return (
    <>
      <div
        className={
          localStorage.getItem('token')
            ? 'hidden'
            : 'w-full flex justify-end pr-6 py-4 pb-0'
        }
      >
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {image && (
        <UploadModal
          setImage={setImage}
          image={image}
          handleImage={handleImage}
        />
      )}
      <NailUploadNav
        token={token}
        removeImage={removeImage}
        setImage={setImage}
        setRemoveImage={setRemoveImage}
      />
      <div ref={displayedImages}>
        <NailImages
          handleDeleteImage={handleDeleteImage}
          imageUrl={imageUrl}
          token={token}
          removeImage={removeImage}
        />
      </div>
      {localStorage.getItem('token') && (
        <div className='fixed bottom-0 w-full z-20'>
          <FooterNav
            darkMode={darkMode}
            setImage={setImage}
            onNailComp={onNailComp}
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logIn: {
      loggedIn: state.login.loggedIn,
    },
  };
};

export default connect(mapStateToProps)(Nails);
