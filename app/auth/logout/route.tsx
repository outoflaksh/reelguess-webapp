import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function GET(request: Request) {
    const supabase = createClient();

    await supabase.auth.signOut();

    revalidatePath('/', 'layout')
    return redirect('/');
}