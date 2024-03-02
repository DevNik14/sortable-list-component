import { useState } from 'react';

import Delete from '../Delete';
import Down from '../Down';
import SuggestedSkills from '../SugegestedSkills/SugegestedSkills';

import styles from './SelectedSkillsList.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SelectedSkillsList = () => {
  const suggestedSKillsList = ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Vue', 'Angular'];
  const [selectedSKillList, setSelectedSKillList] = useState([]);

  const selectSkillHandler = (e) => {
    const selectedSKill = e.currentTarget.textContent;
    if(selectedSKillList.includes(selectedSKill)) {
      console.log('This skill already have been added');
    } else {
      setSelectedSKillList(oldState => [...oldState, selectedSKill]);
    }
  }

  return (
    <section className={`${styles.selectedSkillsListWrapper}`}>
      <ul className={`${styles.skills}`}>
        {selectedSKillList.map((skill, i) => <li key={skill}>
          <div className={`${styles.selectedSkill}`}>
          {i + 1}. {skill}
          <Delete />
        </div>
        </li>)}
        <div className={`${styles.customSelect}`}>
        <Down />
          <select name="">
            <option>ReactJS</option>
            <option>React Native</option>
            <option>React Redux</option>
          </select>
        </div>
        <div className={`${styles.customSelect}`}>
        <Down />
          <select name="" disabled>
            <option>NodeJS</option>
            <option>ExpressJS</option>
            <option>React Redux</option>
          </select>
        </div>
      </ul>
      <SuggestedSkills suggestedSKillsList={suggestedSKillsList} selectSkillHandler={selectSkillHandler}/>
    </section>
  )
}

export default SelectedSkillsList;