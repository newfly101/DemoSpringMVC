const fs = require('fs-extra');
const path = require('path');

// React build 폴더 경로
const buildPath = path.join(__dirname, 'build');
// Spring Boot static 폴더 경로 (필요에 맞게 경로 변경)
const targetPath = path.join(__dirname, '../src/main/resources/static');

async function copyBuild() {
    try {
        // 기존 static 폴더 내용 제거
        await fs.remove(targetPath);

        // build 폴더 내용 복사
        await fs.copy(buildPath, targetPath);

        console.log(`✅ Build files copied to: ${targetPath}`);
    } catch (err) {
        console.error('❌ Error copying files:', err);
    }
}

copyBuild();
