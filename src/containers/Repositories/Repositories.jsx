import { Octokit } from '@octokit/core';
import React, { useCallback, useEffect, useState } from 'react';
import RepositoryItem from '../../components/RepositoryItem';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import Styled from './styles';

const octokit = new Octokit({ auth: process.env.GATSBY_GITHUB_PERSONAL_SITE });

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = useCallback(async () => {
    setIsLoading(true);

    try {
      const {
        user: {
          repositories: { nodes },
        },
      } = await octokit.graphql(
        `query ($login: String!) {
          user(login: $login) {
            repositories(orderBy: {field: PUSHED_AT, direction: DESC}, last: 10, privacy: PUBLIC, ownerAffiliations: OWNER) {
              nodes {
                description
                homepageUrl
                id
                name
                url
                updatedAt
              }
            }
          }
      }`,
        { login: 'oicramps' }
      );

      setRepositories(nodes);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const mapRepositoryItem = useCallback(item => <RepositoryItem key={item.id} repository={item} />, []);

  useEffect(fetchRepositories, [fetchRepositories]);

  return (
    <Styled.Container>
      <Title>Repositories</Title>
      <Styled.Content>
        <Spinner isLoading={isLoading} />
        <Styled.Items>{repositories.map(mapRepositoryItem)}</Styled.Items>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Repositories;
