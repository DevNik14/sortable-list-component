import Plus from '../Plus';
import styles from './SuggestedSkills.module.css';

const SuggestedSkills = ({ suggestedSKillsList, selectSkillHandler }) => {
  return (
    <div className={`${styles.sugegestedSkills}`}>
      <p>Suggested Skills</p>
      <ul>
        {suggestedSKillsList.map(skill =>
          <li key={skill} onClick={selectSkillHandler.bind(null)}>
            <span><Plus />{skill}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SuggestedSkills;