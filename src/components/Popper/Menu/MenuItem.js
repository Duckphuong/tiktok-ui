import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div>
            <Button
                className={classes}
                to={data.to}
                leftIcon={data.icon}
                onClick={onClick}
            >
                {data.title}
            </Button>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
