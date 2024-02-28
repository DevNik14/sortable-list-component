import Plus from '../Plus';
import styles from './SuggestedSkills.module.css';

const SuggestedSkills = () => {
  const suggestedSKillsList = ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Vue', 'Angular'];
  return (
    <div className={`${styles.sugegestedSkills}`}>
      <p>Suggested Skills</p>
      <ul>
        {suggestedSKillsList.map(skill => <li key={skill}><Plus />{skill}</li>)}
      </ul>
    </div>
  )
}

export default SuggestedSkills;