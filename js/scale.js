import { removeLastChar } from './util.js';

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;
const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

// кнопка "меньше"

scaleControlSmaller.addEventListener('click', () => {
  const currentValue = scaleControlValue.value;
  const numberValue = Number(removeLastChar(currentValue));

  if (numberValue > MIN_SCALE && numberValue <= MAX_SCALE) {
    const newValue = numberValue - STEP;

    scaleControlValue.value = `${newValue}%`;
    imgUploadPreview.style.transform = `scale(${newValue / 100})`;
  }
});

// кнопка "больше"

scaleControlBigger.addEventListener('click', () => {
  const currentValue = scaleControlValue.value;
  const numberValue = Number(removeLastChar(currentValue));

  if (numberValue >= MIN_SCALE && numberValue < MAX_SCALE) {
    const newValue = numberValue + STEP;

    scaleControlValue.value = `${newValue}%`;
    imgUploadPreview.style.transform = `scale(${newValue / 100})`;
  }
});

// сбросить значение масштаба при закрытии окна

const resetScale = () => {
  scaleControlValue.value = `${MAX_SCALE}%`;
  imgUploadPreview.style.transform = `scale(${MAX_SCALE / 100})`;
};

export { resetScale };
