import React from "react";
import "./Timeline.css";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

function Timeline () {
    return (
        <div className='timeline'>
            <h1 className="timeline-title">Our Story</h1>
            <VerticalTimeline
                animate={ true }
            >
                {
                    timelineElements.map((element) => {
                        return (
                            <VerticalTimelineElement
                                key={ element.id }
                                date={ element.date }
                                dateClassName="date"
                                icon={ <FmdGoodOutlinedIcon style={{ transform: "scale(2.0)", color: "grey" }} /> }
                                iconStyle={{ background: "rgb(242, 242, 242)" }}
                                visible={ false }
                            >
                                <h3 className="vertical-timeline-element-title">
                                    { element.title }
                                </h3>
                                <p className="vertical-timeline-element-description">
                                    { element.description }
                                </p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    );
}

const timelineElements = [
    {
        id: 1,
        title: "Lorem Ipsum",
        description: "blah blah blah",
        date: "1990"
    }, 
    {
        id: 2,
        title: "Lorem Ipsum",
        description: "blah blah blah",
        date: "2000"
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        description: "blah blah blah",
        date: "2000"
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        description: "blah blah blah",
        date: "2000"
    },
    {
        id: 5,
        title: "Lorem Ipsum",
        description: "blah blah blah",
        date: "2000"
    },
    {
        id: 6,
        title: "Lorem Ipsum",
        description: "blah blah blah",
        date: "2000"
    },
];

export default Timeline;
