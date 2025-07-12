"use client";
import React, { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState(null);
  const ref = useRef();
  const handleClick = () => {
    ref.current.click();
  };
  const handleClickFile = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!image && <p>No image chosen</p>}
          {image && <Image src={image} alt="preview" fill />}
        </div>
        <input
          ref={ref}
          className={classes.input}
          type="file"
          id="image"
          name={name}
          accept="image/jpeg"
          onChange={handleClickFile}
          required
        />
        <button type="button" className={classes.button} onClick={handleClick}>
          Choose Image
        </button>
      </div>
    </div>
  );
}
