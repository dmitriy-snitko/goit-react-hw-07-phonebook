import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, {rejectWithValue}) => {
    try {
      const data = await contactsAPI.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
