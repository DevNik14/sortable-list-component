import Delete from '../Delete';
import Down from '../Down';
import styles from './SelectedSkillsList.module.css';
import SuggestedSkills from '../SugegestedSkills/SugegestedSkills';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
          <select name="">
            <option>NodeJS</option>
            <option>ExpressJS</option>
            <option>React Redux</option>
          </select>
        </div>
      </div>
      <SuggestedSkills />
    </section>
  )
}

export default SelectedSkillsList;