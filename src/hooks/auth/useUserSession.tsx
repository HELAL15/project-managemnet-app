'use client';

import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

export function useUserSession() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        async function fetchSession() {
            const { data } = await supabase.auth.getSession();
            setSession(data.session as Session);
        }

        fetchSession();
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session as Session);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return session;
}
