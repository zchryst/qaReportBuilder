import 'react-native';
import React from 'react';
import LoginWrapper from '../LoginWrapper';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('LoginWrapper', () => {
  it('renders correctly', () => {
    renderer.create(<LoginWrapper />);
  });
});
