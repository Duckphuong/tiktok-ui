import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <div>
            <Button
                className={cx('menu-item')}
                to={data.to}
                leftIcon={data.icon}
                onClick={onClick}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
