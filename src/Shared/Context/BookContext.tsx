import { createContext } from 'react';
import { BookAddValues } from '../../types/global';

interface BookContextProps {
  bookList?: [Array<BookAddValues>, any];
}

export const BookContext = createContext<BookContextProps | undefined>(undefined);

