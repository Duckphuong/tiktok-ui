import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                ref={ref}
                src={fallback || src}
                className={classNames(styles.wrapper, className)}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    }
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
