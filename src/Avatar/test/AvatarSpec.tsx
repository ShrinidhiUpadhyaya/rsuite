import React from 'react';
import { testStandardProps } from '@test/utils';
import Avatar from '../Avatar';
import { render, screen, waitFor } from '@testing-library/react';

describe('Avatar', () => {
  testStandardProps(<Avatar />, {
    sizes: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    colors: ['red', 'green', 'blue', 'cyan', 'magenta', 'orange', 'purple', 'yellow']
  });

  it('Should render default avatar', () => {
    render(<Avatar />);

    expect(screen.getByRole('img')).to.have.attribute('aria-label', 'Avatar');
  });

  it('Should be circle avatar', () => {
    render(
      <Avatar circle role="img">
        R
      </Avatar>
    );
    expect(screen.getByRole('img')).to.have.class('rs-avatar-circle');
  });

  it('Should be bordered', () => {
    render(
      <Avatar bordered role="img">
        R
      </Avatar>
    );
    expect(screen.getByRole('img')).to.have.class('rs-avatar-bordered');
  });

  it('Should render default icon avatar when src is broken', () => {
    render(<Avatar src="https://images.unsplash.com/broken" />);

    expect(screen.getByRole('img')).to.have.attribute('aria-label', 'Avatar');
    expect(screen.getByRole('img')).to.have.class('rs-avatar-icon');
    expect(screen.getByRole('img')).to.be.tagName('svg');
  });

  it('Should render alt text when src is broken', () => {
    render(<Avatar src="https://images.unsplash.com/broken" alt="Name" />);

    expect(screen.getByRole('img')).to.have.attribute('aria-label', 'Name');
    expect(screen.getByRole('img')).to.be.tagName('span');
  });

  it('Should render children when src is broken', () => {
    render(
      <Avatar src="https://images.unsplash.com/broken">
        <div role="img">My Avatar</div>
      </Avatar>
    );

    expect(screen.getByRole('img')).to.have.text('My Avatar');
  });

  it('Should render image avatar when src is valid', async () => {
    const src = 'https://rsuitejs.com/images/react-suite.png';

    render(<Avatar src={src}>RS</Avatar>);

    await waitFor(() => {
      expect(screen.getByRole('img')).to.have.attribute('src', src);
    });
  });

  it('Should hava a srcSet attribute when srcSet is passed', async () => {
    const srcSet =
      'https://rsuitejs.com/images/react-suite.png 320w, https://rsuitejs.com/images/react-suite.png 480w';

    render(<Avatar src="https://rsuitejs.com/images/react-suite.png" srcSet={srcSet} />);

    await waitFor(() => {
      expect(screen.getByRole('img')).to.have.attribute('srcset', srcSet);
    });
  });

  it('Should hava a sizes attribute when sizes is passed', async () => {
    const srcSet =
      'https://rsuitejs.com/images/react-suite.png 320w, https://rsuitejs.com/images/react-suite.png 480w';
    const sizes = '(max-width: 320px) 280px,(max-width: 480px) 440px, 800px';

    render(
      <Avatar src="https://rsuitejs.com/images/react-suite.png" srcSet={srcSet} sizes={sizes} />
    );

    await waitFor(() => {
      expect(screen.getByRole('img')).to.have.attribute('sizes', sizes);
    });
  });

  it(' Should set the value of imgProps to the image', async () => {
    render(
      <Avatar
        src="https://rsuitejs.com/images/react-suite.png"
        imgProps={{ title: 'Avatar Title', 'aria-label': 'Avatar Name' }}
      />
    );

    await waitFor(() => {
      expect(screen.getByRole('img')).to.have.attribute('aria-label', 'Avatar Name');
      expect(screen.getByRole('img')).to.have.attribute('title', 'Avatar Title');
    });
  });
});
