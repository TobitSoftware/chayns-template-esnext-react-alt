import TaskAction from '../actions/TaskAction';

export default {
    performFetch: {
        remote: ()=>{
            return new Promise((resolve,reject)=>{
                chayns.showWaitCursor();
                window.setTimeout(()=>{
                    resolve(
                        ['buy groceries', 'clean up living room', 'world domination']
                    );
                    chayns.hideWaitCursor();
                },1000);
            })
        },
        success: TaskAction.updateTask,
        error: TaskAction.fetchingFailed
    }
};
