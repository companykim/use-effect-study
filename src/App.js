import './App.css';
import React, { useState, useEffect } from 'react';
import { faker } from "@faker-js/faker";
import {FixedSizeList}  from "react-window";
import App_P242_loadlikefetchhook from 'App_P242_loadlikefetchhook';
import {useIterator} from "hooks/useIterator";
import RepoMenu from "components/RepoMenu"
import GitUserByFetch from 'components/GitUserByFetch';
import GitUserRepositories from 'components/GitUserRepositories';

function App() {
  return (
    <GitUserByFetch loginId={`companykim`} />
  );
}

export default App;
