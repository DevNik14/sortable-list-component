import { useState } from 'react';

import Delete from '../Delete';
import Down from '../Down';
import SuggestedSkills from '../SugegestedSkills/SugegestedSkills';

import styles from './SelectedSkillsList.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SelectedSkillsList = () => {
  const suggestedSKillsList = ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Vue', 'Angular'];
  const [selectedSKillList, setSelectedSKillList] = useState({
    firstSkill: '',
    secondSkill: '',
    thirdSkill: '',
    fourthSkill: '',
    fifthSkill: ''
  });

  const selectSkillHandler = (e) => {
    const selectedSKill = e.target.value;
    if (Object.values(selectedSKillList).includes(selectedSKill)) {
      console.log('This skill already have been added');
    } else {
      setSelectedSKillList(oldState => (
        {...oldState, [e.target.name]: selectedSKill}
      ));
    }
  }

  const deleteSkillHandler = (e) => {
    const skillToBeDeleted = e.currentTarget.parentNode.classList[1];
    setSelectedSKillList(oldState => (
      {...oldState, [skillToBeDeleted]: ''}
    ));
  }

  return (
    <section className={`${styles.selectedSkillsListWrapper}`}>
      <ul className={`${styles.skills}`}>
        {Object.keys(selectedSKillList).map((skill, i) =>
          <li key={skill}>
            {selectedSKillList[skill]
              ? <div className={`${styles.selectedSkill} ${skill}`}>
                {i + 1}. {selectedSKillList[skill]}
                <span onClick={deleteSkillHandler}>
                  <Delete />
                </span>
              </div>
              : <div className={`${styles.customSelect}`}>
                <Down deleteSkillHandler={deleteSkillHandler}/>
                <select name={skill} onChange={selectSkillHandler} value={selectedSKillList[skill]}>
                  <option value="add skill">Add Skill</option>
                  <option value="ReactJS">ReactJS</option>
                  <option value="React Native">React Native</option>
                  <option value="React Redux">React Redux</option>
                  <option value="NodeJS">NodeJS</option>
                </select>
              </div>
            }
          </li>
        )}
      </ul>
      <SuggestedSkills suggestedSKillsList={suggestedSKillsList} selectSkillHandler={selectSkillHandler} />
    </section>
  )
}

export default SelectedSkillsList;