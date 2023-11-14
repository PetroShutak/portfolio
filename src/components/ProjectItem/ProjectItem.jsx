import React from 'react';
import { useState, useEffect } from 'react';
import {
  ProjectItemContainer,
  Modal,
  ModalContent,
  ImageCard,
  Desc,
  Placeholder,
} from './ProjectItem.styled';
import { StyledGithubIcon, StyledExternalLinkIcon } from './ProjectItem.styled';

const ProjectItem = ({ title, url, repository, image, description }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [modalOpen]);

  const openModal = () => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setImageLoaded(false);
    setModalOpen(true);
  };
  const closeModal = e => {
    setModalOpen(false);
  };

  const handleImageClick = () => {
    if (!modalOpen) {
      openModal();
    }
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const handleCloseModal = event => {
    if (event.target.classList.contains('backdrop')) {
      closeModal();
    }
  };

  return (
    <ProjectItemContainer>
      <ImageCard src={image} alt={title} onClick={handleImageClick} />
      <h3>{title}</h3>
      <Desc>
        {' '}
        Live demo:
        <a href={url} target="_blank" rel="noopener noreferrer">
          {<StyledExternalLinkIcon />}
        </a>
      </Desc>
      <Desc>
        {' '}
        Code:
        <a href={repository} target="_blank" rel="noopener noreferrer">
          {<StyledGithubIcon />}
        </a>
      </Desc>
      {modalOpen && (
        <Modal className="backdrop" onClick={handleCloseModal}>
          <ModalContent>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <h1>{title}</h1>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {<StyledExternalLinkIcon />}
              </a>
            </div>
            {!imageLoaded && <Placeholder />}
            {selectedImage && (
              <img
                src={selectedImage}
                alt={title}
                style={{ display: imageLoaded ? 'block' : 'none' }}
                onLoad={handleImageLoaded}
              />
            )}
            <p>{selectedDescription}</p>
          </ModalContent>
        </Modal>
      )}
    </ProjectItemContainer>
  );
};

export default ProjectItem;
