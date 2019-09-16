import React from 'react'
import Auth from '../components/Auth';
import HabitTable from '../components/HabitTable';

class MyHabits extends React.Component {
    render() {
        return (
            <div>
                <HabitTable />
            </div>

        )
    }

}

export default Auth(MyHabits)