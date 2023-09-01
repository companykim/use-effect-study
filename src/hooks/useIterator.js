import React, { useState, useEffect, useMemo, useCallback } from 'react';

function useIterator(items = [], initIdx = 0) {
    const [curIdx, setCurIdx] = useState(initIdx);
    const prev = useCallback(() => {curIdx === 0 ? setCurIdx(items.length - 1) : setCurIdx(curIdx - 1);});

    const next = useCallback(() => {curIdx === items.length - 1 ? setCurIdx(0) : setCurIdx(curIdx + 1)});

    const Memorizeditem = useMemo(()=>{return items[curIdx]}, [curIdx]);

    return {item: Memorizeditem || items[initIdx], prev, next};
}

export {useIterator};

/*
before memorization
function useIterator(items = [], initIdx = 0) {
    const [curIdx, setCurIdx] = useState(initIdx);

    const prev = () => {
        curIdx === 0 ? setCurIdx(items.length - 1) : setCurIdx(curIdx - 1);
    };

    const next = () => {
        curIdx === items.length - 1 ? setCurIdx(0) : setCurIdx(curIdx + 1);
    };

    return {item:items[curIdx], prev, next};
}

export {useIterator};
*/