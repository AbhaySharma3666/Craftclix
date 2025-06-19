'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Catlog.jpeg', '_blank')}>
      Download CATLOG
    </Button>
  );
};

export default DownloadCV;
