import { useState } from 'react';

import Delete from '../Delete';
import Down from '../Down';
import SuggestedSkills from '../SugegestedSkills/SugegestedSkills';
import skillList from '../../skillList.json';

import styles from './SelectedSkillsList.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SelectedSkillsList = () => {
  const suggestedSKillsList = ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Vue', 'Angular'];
  const [selectedSkillList, setSelectedSkillList] = useState({
    firstSkill: '',
    secondSkill: '',
    thirdSkill: '',
    fourthSkill: '',
    fifthSkill: ''
  });

  const skillKeys = Object.keys(skillList);

  const selectSkillHandler = (e) => {
    const selectedSkill = e.target.value;
    if (Object.values(selectedSkillList).includes(selectedSkill)) {
      console.log('This skill already have been added');
    } else {
      setSelectedSkillList(oldState => (
        {...oldState, [e.target.name]: selectedSkill}
      ));
    }
  }

  const addSugestedSkillHandler = (e) => {
    const selectedSkill = e.currentTarget.textContent;
    const skillValues = Object.values(selectedSkillList);
    if(skillValues.every(value => value !== '')) {
      console.log('Cann\'t add more skills');
      return;
    }
    if (skillValues.includes(selectedSkill)) {
      console.log('This skill already have been added');
    } else {
      setSelectedSkillList(oldState => {
        const emptyValue = Object.entries(oldState).find(el => el[1] === '')[0];
        return {...oldState, [emptyValue]: selectedSkill}
      });
    }
  }

  const deleteSkillHandler = (e) => {
    const skillToBeDeleted = e.currentTarget.parentNode.classList[1];
    setSelectedSkillList(oldState => (
      {...oldState, [skillToBeDeleted]: ''}
    ));
  }

  return (
    <section className={`${styles.selectedSkillsListWrapper}`}>
      <ul className={`${styles.skills}`}>
        {Object.keys(selectedSkillList).map((skill, i) =>
          <li key={skill} className={styles.selectedSkillItem}>
            {selectedSkillList[skill]
              ? <div className={`${styles.selectedSkill} ${skill}`}>
                {i + 1}. {selectedSkillList[skill]}
                <span onClick={deleteSkillHandler}>
                  <Delete />
                </span>
              </div>
              : <div className={`${styles.customSelect}`}>
                <Down deleteSkillHandler={deleteSkillHandler} />
                <select name={skill} onChange={selectSkillHandler} value={`${selectedSkillList[skill]}`}>
                  <option value="add skill">Add Skill</option>
                  {
                    skillKeys.map(key => 
                      skillList[key].map(skill => {
                        return <option key={skill} value={skill}>{skill}</option>
                      })
                    )
                  }
                </select>
              </div>
            }
          </li>
        )}
      </ul>
      <SuggestedSkills suggestedSKillsList={suggestedSKillsList} addSugestedSkillHandler={addSugestedSkillHandler} />
    </section>
  )
}

export default SelectedSkillsList;