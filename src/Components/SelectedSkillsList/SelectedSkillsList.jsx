import Plus from '../Plus';
import Delete from '../Delete';
import styles from './SelectedSkillsList.module.css';

const SelectedSkillsList = () => {
  return (
    <section className={`${styles.selectedSkillsListWrapper}`}>
      <div className={`${styles.skills}`}>
        <div className={`${styles.selectedSkill}`}>
          1. JavaScript
          <Delete />
        </div>
        <div className={`${styles.selectedSkill}`}>
          2. React
          <Delete />
        </div>
        <div className={`${styles.selectedSkill}`}>
          3. NextJS
          <Delete />
        </div>
      </div>
      <div className={`${styles.sugegestedSkills}`}>
        <p>Suggested Skills</p>
        <ul>
          <li><Plus />HTML</li>
          <li><Plus />CSS</li>
          <li><Plus />Bootstrap</li>
          <li><Plus />TypeScript</li>
          <li><Plus />Vue</li>
          <li><Plus />Angular</li>
        </ul>
      </div>
    </section>
  )
}

export default SelectedSkillsList;