
import styles from './Tags.module.css'

import TagsTable from '../../components/tables/TagsTable/TagsTable'

const Tags = () => {
    return (
        <div className={styles.Tags}>

            <h1>Tags</h1>

            <hr />

            <div className={styles.TagsTableContainer}>
                <TagsTable />
            </div>

        </div>
    )
}

export default Tags