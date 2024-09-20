import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/00d46e5c4ce1ef18eb1f4c046f482003.jpeg?lk3s=a5d48078&nonce=91798&refresh_token=902f6785ee14fe7475f803e34e65112e&x-expires=1726844400&x-signature=GOmwUzuHxOICDv75Yb0Whdq4oUU%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoao"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen duc phuong</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </p>
                <span className={cx('username')}>nguyenducphuong</span>
            </div>
        </div>
    );
}

export default AccountItem;
