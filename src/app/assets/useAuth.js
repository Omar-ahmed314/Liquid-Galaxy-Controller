'use client';

import { useContext } from 'react';
import { contextAuth } from './contextAuth';

const useAuth = () => {
  return useContext(contextAuth);
};

export default useAuth;
