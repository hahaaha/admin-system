import { useState, useLayoutEffect } from 'react'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import {IDomEditor} from '@wangeditor/editor'

function MyEditor() {
    const [editor, setEditor] = useState<IDomEditor | null>(null) // 存储 editor 实例

    // `defaultContent` (JSON 格式) 和 `defaultHtml` (HTML 格式) 二选一
    const defaultContent = [
        { type: "paragraph", children: [{ text: "一行文字" }], }
    ]
    // const defaultHtml = '<p>一行文字</p>'

    const toolbarConfig = { }
    const editorConfig = {
        placeholder: '请输入内容...',
        onCreated(editor: any) { 
            setEditor(editor); 
        } // 记录下 editor 实例，重要！
    }

    // 及时销毁 editor ，重要！ 
    useLayoutEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <>
            <div style={{ border: '1px solid #ccc', zIndex: 100}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    defaultContent={defaultContent}
                    // defaultHtml={defaultHtml}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
        </>
    )
}

export default MyEditor;