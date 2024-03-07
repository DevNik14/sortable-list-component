import Plus from '../Plus';
import styles from './SuggestedSkills.module.css';

const SuggestedSkills = ({ suggestedSKillsList, addSugestedSkillHandler }) => {
  return (
    <div className={`${styles.sugegestedSkills}`}>
      <p>Suggested Skills</p>
      <ul>
        {suggestedSKillsList.map(skill =>
          <li key={skill} onClick={addSugestedSkillHandler}>
            <span><Plus />{skill}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SuggestedSkills;