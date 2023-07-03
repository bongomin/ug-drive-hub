import { carProps } from '@/types';
import React from 'react';

interface carDetailsProps {
    isOpen:boolean;
    closeModal: () => void;
    car:carProps;
}

function CarDetails({isOpen, closeModal, car}:carDetailsProps) {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails