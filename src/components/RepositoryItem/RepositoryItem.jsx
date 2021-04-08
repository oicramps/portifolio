import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';
import format from 'date-fns/format';
import Styled from './styles';
import Button from '../Button';

const RepositoryItem = ({ repository }) => (
  <Styled.Card>
    <Styled.Name>{repository.name}</Styled.Name>
    <Styled.Desc>{repository.description}</Styled.Desc>
    <Styled.Footer>
      <Button icon={<FaGithub />} href={repository.url} target="_blank">
        Github
      </Button>
      {repository.homepageUrl ? (
        <Button margin={{ mt: 'xl' }} icon={<FaGlobeAmericas />} href={repository.homepageUrl} target="_blank">
          Webpage
        </Button>
      ) : null}
      <Styled.UpdatedAt>{format(new Date(repository.updatedAt), 'MM/dd/yyyy hh:mm:ss')}</Styled.UpdatedAt>
    </Styled.Footer>
  </Styled.Card>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    homepageUrl: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default React.memo(RepositoryItem);
