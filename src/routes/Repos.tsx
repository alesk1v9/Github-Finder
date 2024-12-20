import classes from './Repos.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn";

import { RepoProps } from "../types/repo";
import Loader from '../components/Loader';
import Repo from "../components/Repo";

const Repos = () => {

  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username:string) {

      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      setRepos(data);
    };

    {username && loadRepos(username)};

  }, []);

if (!repos && isLoading) return <Loader />;

  return (
    <div className={classes.repos}>
      <BackBtn />
      <h2>Explore all repos of {username}</h2>
      {repos && repos.length === 0 && <p>There is no repositories to show :/</p>}
      {repos && repos.length > 0 && (
        <div className={classes.repos_container}>
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Repos