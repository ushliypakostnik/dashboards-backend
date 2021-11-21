import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import { CurrentUserNav, Box } from '@admin-bro/design-system';

// import config from '../config';

// hoc
// eslint-disable-next-line import/extensions, import/no-unresolved
import allowOverride from './hoc/allowOverride';

// eslint-disable-next-line no-unused-vars
const GlobalStyle = createGlobalStyle`
`;

const UserMenu = (props) => {
  const { session, paths } = props;

  const dropActions = [
    {
      label: 'Logout',
      onClick: (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-undef
        window.location.href = paths.logoutPath;
      },
      icon: 'Logout',
    },
  ];

  // console.log('session', session);

  return (
    <>
      <GlobalStyle />
      <Box flexShrink={0}>
        <CurrentUserNav name={session.email} title={session.role} avatarUrl={null} dropActions={dropActions} />
      </Box>
    </>
  );
};

// avatarUrl={`${config.BUCKET_ROOT}${config.BUCKET}/${session.image.key}`}

const OverridableLoggedIn = allowOverride(UserMenu, 'UserMenu');

export { OverridableLoggedIn as default, OverridableLoggedIn as UserMenu };
