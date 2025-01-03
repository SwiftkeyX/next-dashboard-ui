'use client'

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/src/shared/types.js';

const NoSSR_Calendar = dynamic(() => Promise.resolve(() => {
    const [value, onChange] = useState<Value>(new Date() );

    return (
        <Calendar onChange={onChange} value={value} />
    )
}), { ssr: false });

export default NoSSR_Calendar;