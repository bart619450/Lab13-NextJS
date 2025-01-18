
import classes from './main-header-background.module.css';

export default function MainheaderBackground(){
    return(
        <div className={classes['header-background']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop
                        offset="0%"
                        style={{stopColor: '#0d3449', stopOpacity: '1'}}
                        />
                        <stop
                        offset="100%"
                        style={{stopColor: '#115e87', stopOpacity: '1'}}
                        />
                    </linearGradient>
                </defs>
                <path
                fill="url(#gradient)"
                d="M0,256L48,240C96,224,192,192,288,181,3C384,171,480,181,576"
                ></path>
            </svg>
        </div>
    )
}