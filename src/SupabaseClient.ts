import {createClient} from '@supabase/supabase-js'
import {Database} from './types/supabase'

function throwExpression(errorMessage: string): never {
    throw new Error(errorMessage);
}

const supabase_url: string = process.env.REACT_APP_SUPABASE_URL ?? throwExpression("Supabase URL not provided")
const supabase_anon_key: string = process.env.REACT_APP_SUPABASE_ANON_KEY ?? throwExpression("Supabase ANON key not provided")

const supabase = createClient<Database>(
    supabase_url,
    supabase_anon_key
)

export default supabase