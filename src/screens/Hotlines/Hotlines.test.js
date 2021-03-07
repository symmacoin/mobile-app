import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import HotlinesList from './index';
import { Provider as LocationProvider } from 'state/LocationContext';

describe('Hotlines screen', () => {
  const component = (
    <LocationProvider>
      <HotlinesList />
    </LocationProvider>
  );
  test('should have SearchBar and FlatList elements', async () => {
    const { getByTestId, getByPlaceholderText } = await render(component);
    expect(getByTestId('hotlinesFlatList')).not.toBeNull();
    expect(
      getByPlaceholderText(/Type city or organisation name/)
    ).not.toBeNull();
  });
  it('should match snapshot', () => {
    const result = render(component).toJSON();
    expect(result).toMatchSnapshot();
  });
});
