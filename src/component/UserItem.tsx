import React, { FC, memo, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { FaUserCircle } from 'react-icons/fa';
import { CustomCopmonentProps, IUser } from './../interfaces';
import { mergeClassName } from './../utils';
import { Link } from 'react-router-dom';
import _ from 'lodash';

interface UserItemProps extends CustomCopmonentProps {
    user: IUser;
    handleOpenModal: Function;
}

const propsAreEqueal = (prevProp: UserItemProps, nextProp: UserItemProps) =>
    _.isEqual(prevProp.user, nextProp.user) && prevProp.className === prevProp.className;

export const UserItem: FC<Readonly<UserItemProps>> = memo(({ user, handleOpenModal, className }) => {
    console.log(import.meta.env.BASE_URL);
    return (
        <Col className={mergeClassName('p-3', className)}>
            <div className="people-nearby">
                <div className="nearby-user">
                    <Row>
                        <Col md={2} sm={2} className="d-flex justify-content-center align-items-center">
                            <FaUserCircle size={80} />
                        </Col>
                        <Col md={7} sm={7}>
                            <h5>{user.name}</h5>
                            <p>{user.company.name}</p>
                            <p className="text-muted">{user.phone}</p>
                        </Col>
                        <Col md={3} sm={3} className="d-flex flex-column gap-3 justify-content-center">
                            <Link
                                to={`${import.meta.env.BASE_URL}posts/${user.id}`}
                                className="btn btn-primary"
                            >
                                Posts
                            </Link>
                            <Button type="button" variant="primary" onClick={() => handleOpenModal(user.id)}>
                                Albums
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    );
}, propsAreEqueal);
