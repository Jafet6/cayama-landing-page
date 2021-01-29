import React from 'react';
import './imageParagraphComponent.css';
import {
  ImageParagraphTitle,
  ImageParagraphImage,
  ImageParagraphLink,
  ImageParagraphParagraph
} from './innerComponents/innerComponents';

function ImageParagraphComponent({ title, paragraph, link, image, reverse = false }) {
  return (
    <section className="image-paragraph-section">
      <div className={reverse ? 'image-paragraph-content-reverse' : 'image-paragraph-content'}>
        {image.icon}
        <div className="image-paragraph-description">
          <ImageParagraphTitle 
            className={title.className}
            text={title.text}
          />
          <ImageParagraphParagraph 
            className={paragraph.className}
            text={paragraph.text}
          />
          <ImageParagraphLink
            className={link.className}
            text={link.text}
            href={link.href}
          />
        </div>
        {/* {reverse ? 
          null
          :
          <IoMegaphoneOutline
            size={150}
            className={image.className}
            classNameDiv={image.classNameDiv}
          />
        } */}
      </div>
    </section>
  );
}

export default ImageParagraphComponent;