import T from 'i18n-react';
import Alert from './Alert';
import colorParser from './colorParser';
import confirm from './confirmation/confirm';
import router from './router';
import { searchCompany, searchCustomer, searchUser } from './searchers';
import toggleCheckBoxes from './toggleCheckBoxes';
import uploadHandler from './uploadHandler';
import urlParser from './urlParser';

export const renderFullName = data => {
  if (data.firstName || data.lastName) {
    return (data.firstName || '') + ' ' + (data.lastName || '');
  }

  return data.primaryEmail || data.primaryPhone || 'N/A';
};

export const setTitle = (title: string, force: boolean) => {
  if (!document.title.includes(title) || force) {
    document.title = title;
  }
};

export const setBadge = (count: number, title: string) => {
  const favicon = document.getElementById('favicon') as HTMLAnchorElement;

  if (count) {
    if (document.title.includes(title)) {
      setTitle(`(${count}) ${title}`, true);
    }

    favicon.href = '/favicon-unread.png';
  } else {
    setTitle(title, true);
    favicon.href = '/favicon.png';
  }
};

export const reorder = (
  list: string[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);

  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const generateRandomColorCode = () => {
  return `#${Math.random()
    .toString(16)
    .slice(2, 8)}`;
};

// Create an array with "stop" numbers, starting from "start"
export const range = (start: number, stop: number) => {
  return Array.from(Array(stop), (_, i) => start + i);
};

// Return the list of values that are the intersection of two arrays
export const intersection = (array1: any[], array2: any[]) => {
  return array1.filter(n => array2.includes(n));
};

// Computes the union of the passed-in arrays: the list of unique items
export const union = (array1: any[], array2: any[]) => {
  return array1.concat(array2.filter(n => !array1.includes(n)));
};

// Similar to without, but returns the values from array that are not present in the other arrays.
export const difference = (array1: any[], array2: any[]) => {
  return array1.filter(n => !array2.includes(n));
};

export {
  Alert,
  uploadHandler,
  router,
  confirm,
  toggleCheckBoxes,
  urlParser,
  colorParser,
  searchCompany,
  searchUser,
  searchCustomer
};

export const __ = (key: string, options?: any) => {
  const translation = T.translate(key, options);

  if (!translation) {
    return '';
  }

  return translation.toString();
};
