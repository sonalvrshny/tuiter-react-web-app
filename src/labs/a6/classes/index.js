import './index.css';

function Classes() {
    const color = 'blue';
    const dangerous = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10x`}>
                Dynamic Blue Background
            </div>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10x`}>
                Dangerous Background
            </div>
        </div>
    )
};
export default Classes;
