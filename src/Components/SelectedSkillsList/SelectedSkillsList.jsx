import Delete from '../Delete';
import styles from './SelectedSkillsList.module.css';
import SuggestedSkills from '../SugegestedSkills/SugegestedSkills';

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
      <SuggestedSkills />
    </section>
  )
}

export default SelectedSkillsList;