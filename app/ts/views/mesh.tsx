import * as React from 'react';
import { observer } from 'mobx-react';
import { Euler, Color, FlatShading, VertexColors } from 'three';
import { getColor } from './test/actions';


interface Props {
    rotation: Euler;
}

interface ComponentProps extends Props {
    color: Color;
}

export function MeshComponent(props: ComponentProps) {
    const { rotation, color } = props;
    return (
        <mesh rotation={rotation}>
            <sphereGeometry
                radius={1}
                widthSegments={100}
                heightSegments={100}
                phiStart={0}
                phiLength={Math.PI * 2}
                thetaStart={0}
                thetaLength={Math.PI}
            />
            <meshPhongMaterial
                color={color}
                specular={0x999999}
                shading={FlatShading}
                vertexColors={VertexColors}
                castShadow={true}
                receiveShadow={true}
            />
        </mesh>
    );
}


export const Mesh = observer((props: Props) => (
    <MeshComponent
        color={getColor()}
        rotation={props.rotation}
    />
));
