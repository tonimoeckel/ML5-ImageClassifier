import {Space, Upload, UploadProps} from "antd";
import React, {useState} from "react";
import {ML5ImageCard} from "../ML5ImageCard";
import {MasonryLayout} from "../MasonryLayout";
import {InboxOutlined} from '@ant-design/icons';
import {useMeasure} from "../../hooks/useMeasure";

const { Dragger } = Upload;

export const MLImageGrid: React.FC<{ initImages: any[] }> = props => {

    const [data, setData] = useState(props.initImages);
    const [ref, { width }] = useMeasure();

    const uploadProps: UploadProps = {
        name: 'file',
        multiple: true,
        accept:"image/*",
        action: "/",
        beforeUpload: (file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = e.target?.result;
                if (image) {
                    setData([image, ...data])
                }
            }
            reader.readAsDataURL(file);
            return false;
        },
        showUploadList: false,

    };

    console.log(width);
    console.log(width ?Math.floor(width / 400): 1);

    return <div ref={ref}>
        <Space size={"large"} direction={"vertical"} style={{width: "100%"}}>
            <Dragger {...uploadProps}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Hier klicken oder Bild einfügen</p>
                <p className="ant-upload-hint">
                    Unterstützte Dateien: .jpg
                </p>
            </Dragger>

            <MasonryLayout columns={width ? Math.floor(width / 250) : 3} gap={30} items={data.map((item) => {
                return <ML5ImageCard image={item} width={width ? (width / Math.floor(width / 250)-30): undefined} />
            })} />
        </Space>


    </div>

};