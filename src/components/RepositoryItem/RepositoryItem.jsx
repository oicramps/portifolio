import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';
import format from 'date-fns/format';
import Styled from './styles';
import Button from '../Button';
import useAnalyticsEvents from '../../hooks/useAnalyticsEvents';

const RepositoryItem = ({ repository }) => {
  const { name, description, url, homepageUrl, updatedAt } = repository;

  const sendEvent = useAnalyticsEvents();

  const handleOpenLink = (link, type) => {
    sendEvent(`repository_${type}_link`, { name, url });
    window.open(link, '_blank');
  };

  return (
    <Styled.Card>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Desc>{description}</Styled.Desc>
      <Styled.Footer>
        <Button icon={<FaGithub />} onClick={() => handleOpenLink(url, 'github')}>
          Github
        </Button>
        {homepageUrl ? (
          <Button
            margin={{ mt: 'xl' }}
            icon={<FaGlobeAmericas />}
            onClick={() => handleOpenLink(homepageUrl, 'webpage')}
          >
            Webpage
          </Button>
        ) : null}
        <Styled.UpdatedAt>{format(new Date(updatedAt), 'MM/dd/yyyy hh:mm:ss')}</Styled.UpdatedAt>
      </Styled.Footer>
    </Styled.Card>
  );
};

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
