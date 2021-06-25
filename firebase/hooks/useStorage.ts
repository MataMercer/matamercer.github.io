import { useCallback, useEffect, useState } from 'react';
import {
  deleteFileRequest,
  uploadFileRequest,
} from '../repositories/StorageRepository';
import useGenericRequest from './util/useGenericRequest';

function useStorage() {
  const { status, errors, callRequest } = useGenericRequest();

  const deleteFile = useCallback((url: string) => {
    return callRequest(deleteFileRequest(url));
  }, []);

  const uploadFile = useCallback((fileToUpload: File) => {
    return callRequest(uploadFileRequest(fileToUpload));
  }, []);
  return { uploadFile, deleteFile, status, errors };
}

export default useStorage;