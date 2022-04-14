import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, CardHeader } from '../../../../components/card';
import { CLCard } from '../../../../components/card/card-base';

function Users({ history }) {
  function onCreateClick() {
    history.push('/master-data/users/create-edit');
  }

  function onEditClick(userId) {
    history.push('/master-data/users/create-edit/' + userId);
  }

  return (
    <CLCard>
      <CardHeader>
        <h6>Users</h6>
      </CardHeader>
      <CardBody>
      </CardBody>
      <CardFooter>HAHA</CardFooter>
    </CLCard>
  );
}

Users.propTypes = {
  history: PropTypes.any
};

export default Users;
