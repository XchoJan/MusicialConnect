import { NavigationContainer } from '@react-navigation/native';
import UnauthorizedNavigations from './UnaunthorizedNavigations/unauth-nav.tsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../store/store.ts';
import AuthorizedNavigations from './AuthorizedNavigations/authed-nav.tsx';
import { TokensRepository } from '../helpers/tokens-repository.ts';

const RootNavigations = () => {
  const token = TokensRepository.getAccessToken();

  return (
    <NavigationContainer>
      {token ? <AuthorizedNavigations /> : <UnauthorizedNavigations />}
    </NavigationContainer>
  );
};

export default RootNavigations;
